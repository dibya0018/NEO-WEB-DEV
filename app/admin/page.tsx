"use client"

import { useEffect, useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

type VisitorStat = {
  path: string
  views: number
  first_view: string
  last_view: string
}

type VisitorSummary = {
  total_views: number
  unique_visitors: number
  range: string
}

type HourlyView = {
  hour: string
  views: number
}

type Testimonial = {
  id: number
  youtube_id: string
  url: string
}

type Doctor = {
  id: number
  name: string
  specialty: string
  image_path: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState<string | null>(null)
  const [loginLoading, setLoginLoading] = useState(false)

  const [visitorStats, setVisitorStats] = useState<VisitorStat[]>([])
  const [visitorSummary, setVisitorSummary] = useState<VisitorSummary>({
    total_views: 0,
    unique_visitors: 0,
    range: "all",
  })
  const [hourlyViews, setHourlyViews] = useState<HourlyView[]>([])
  const [timeRange, setTimeRange] = useState<string>("all")
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [doctors, setDoctors] = useState<Doctor[]>([])

  const [newTestimonialUrl, setNewTestimonialUrl] = useState("")

  const [doctorName, setDoctorName] = useState("")
  const [doctorSpecialty, setDoctorSpecialty] = useState("")
  const [doctorImageFile, setDoctorImageFile] = useState<File | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem("admin_authenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
      void refreshAll()
    }
  }, [])

  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    setLoginLoading(true)
    setLoginError(null)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        sessionStorage.setItem("admin_authenticated", "true")
        setIsAuthenticated(true)
        setEmail("")
        setPassword("")
        void refreshAll()
      } else {
        const data = await res.json().catch(() => ({}))
        setLoginError(data.error || "Invalid email or password")
      }
    } catch (err) {
      console.error(err)
      setLoginError("Login failed. Please try again.")
    } finally {
      setLoginLoading(false)
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_authenticated")
    setIsAuthenticated(false)
    setVisitorStats([])
    setTestimonials([])
    setDoctors([])
  }

  async function refreshAll() {
    setError(null)
    try {
      const [statsRes, testimonialsRes, doctorsRes] = await Promise.all([
        fetch(`/api/admin/visitor-stats?range=${timeRange}`),
        fetch("/api/testimonials"),
        fetch("/api/doctors"),
      ])

      if (statsRes.ok) {
        const data = await statsRes.json()
        setVisitorStats(data.stats ?? [])
        setVisitorSummary(data.summary ?? { total_views: 0, unique_visitors: 0, range: timeRange })
        setHourlyViews(data.hourly ?? [])
      }

      if (testimonialsRes.ok) {
        const data = await testimonialsRes.json()
        setTestimonials(data.testimonials ?? [])
      }

      if (doctorsRes.ok) {
        const data = await doctorsRes.json()
        setDoctors(data.doctors ?? [])
      }
    } catch (err) {
      console.error(err)
      setError("Failed to load admin data")
    }
  }

  useEffect(() => {
    void refreshAll()
  }, [timeRange])

  async function handleAddTestimonial(e: FormEvent) {
    e.preventDefault()
    if (!newTestimonialUrl.trim()) return

    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: newTestimonialUrl.trim() }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to add testimonial")
      }

      setNewTestimonialUrl("")
      await refreshAll()
    } catch (err) {
      console.error(err)
      setError(
        err instanceof Error ? err.message : "Failed to add testimonial"
      )
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteTestimonial(id: number) {
    if (!confirm("Delete this testimonial?")) return

    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: "DELETE",
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to delete testimonial")
      }

      setTestimonials((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error(err)
      setError(
        err instanceof Error ? err.message : "Failed to delete testimonial"
      )
    } finally {
      setLoading(false)
    }
  }

  async function handleAddDoctor(e: FormEvent) {
    e.preventDefault()
    if (!doctorName.trim() || !doctorSpecialty.trim() || !doctorImageFile) {
      setError("Please provide name, specialty and image")
      return
    }

    setLoading(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append("name", doctorName.trim())
      formData.append("specialty", doctorSpecialty.trim())
      formData.append("image", doctorImageFile)

      const res = await fetch("/api/doctors", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to add doctor")
      }

      setDoctorName("")
      setDoctorSpecialty("")
      setDoctorImageFile(null)
      const imageInput = document.getElementById("doctor-image-input") as HTMLInputElement | null
      if (imageInput) {
        imageInput.value = ""
      }

      await refreshAll()
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : "Failed to add doctor")
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteDoctor(id: number) {
    if (!confirm("Delete this doctor?")) return

    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/doctors/${id}`, {
        method: "DELETE",
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to delete doctor")
      }

      setDoctors((prev) => prev.filter((d) => d.id !== id))
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : "Failed to delete doctor")
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-50 overflow-x-hidden flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600">Neo TrueNorth Hospitals</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {loginError && (
              <div className="rounded-md bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
                {loginError}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loginLoading}>
              {loginLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">
            Admin Panel
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => void refreshAll()}>
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="p-4 lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Visitor Analytics</h2>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-1 border rounded text-sm"
              >
                <option value="hour">Last Hour</option>
                <option value="day">Last 24 Hours</option>
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="year">Last Year</option>
                <option value="all">All Time</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {visitorSummary.total_views}
                </div>
                <div className="text-sm text-gray-600">Total Views</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {visitorSummary.unique_visitors}
                </div>
                <div className="text-sm text-gray-600">Unique Visitors</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {visitorStats.length}
                </div>
                <div className="text-sm text-gray-600">Pages Viewed</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {visitorStats.length > 0
                    ? Math.round(visitorSummary.total_views / visitorStats.length)
                    : 0}
                </div>
                <div className="text-sm text-gray-600">Avg Views/Page</div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2 text-sm">Views by Page</h3>
                <div className="max-h-64 overflow-y-auto text-sm border rounded">
                  {visitorStats.length === 0 ? (
                    <p className="text-gray-500 p-4">No views tracked yet.</p>
                  ) : (
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr className="border-b">
                          <th className="py-2 px-3">Path</th>
                          <th className="py-2 px-3 text-right">Views</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visitorStats.map((stat) => (
                          <tr key={stat.path} className="border-b last:border-0 hover:bg-gray-50">
                            <td className="py-2 px-3 break-all">{stat.path}</td>
                            <td className="py-2 px-3 text-right font-medium">
                              {stat.views}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-sm">Hourly Views (Last 24h)</h3>
                <div className="max-h-64 overflow-y-auto text-sm border rounded">
                  {hourlyViews.length === 0 ? (
                    <p className="text-gray-500 p-4">No hourly data available.</p>
                  ) : (
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr className="border-b">
                          <th className="py-2 px-3">Hour</th>
                          <th className="py-2 px-3 text-right">Views</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hourlyViews.map((h) => (
                          <tr key={h.hour} className="border-b last:border-0 hover:bg-gray-50">
                            <td className="py-2 px-3">
                              {new Date(h.hour).toLocaleString("en-US", {
                                month: "short",
                                day: "numeric",
                                hour: "numeric",
                                hour12: true,
                              })}
                            </td>
                            <td className="py-2 px-3 text-right font-medium">
                              {h.views}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 lg:col-span-2">
            <h2 className="font-semibold mb-3">Testimonials (YouTube)</h2>

            <form
              onSubmit={handleAddTestimonial}
              className="flex flex-col md:flex-row gap-2 mb-4"
            >
              <Input
                type="url"
                placeholder="Paste YouTube video URL"
                value={newTestimonialUrl}
                onChange={(e) => setNewTestimonialUrl(e.target.value)}
              />
              <Button type="submit" disabled={loading}>
                Add
              </Button>
            </form>

            <div className="max-h-64 overflow-y-auto text-sm">
              {testimonials.length === 0 ? (
                <p className="text-gray-500">No testimonials added yet.</p>
              ) : (
                <table className="w-full text-left text-xs md:text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-1 pr-2">Video ID</th>
                      <th className="py-1 pr-2">URL</th>
                      <th className="py-1 pr-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testimonials.map((t) => (
                      <tr key={t.id} className="border-b last:border-0">
                        <td className="py-1 pr-2">{t.youtube_id}</td>
                        <td className="py-1 pr-2 break-all">{t.url}</td>
                        <td className="py-1 pr-2 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => void handleDeleteTestimonial(t.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Card>
        </section>

        <section>
          <Card className="p-4">
            <h2 className="font-semibold mb-3">Doctors</h2>

            <form
              onSubmit={handleAddDoctor}
              className="grid gap-2 md:grid-cols-4 mb-4"
            >
              <Input
                placeholder="Name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
              />
              <Input
                placeholder="Specialty"
                value={doctorSpecialty}
                onChange={(e) => setDoctorSpecialty(e.target.value)}
              />
              <Input
                id="doctor-image-input"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setDoctorImageFile(e.target.files?.[0] ?? null)
                }
              />
              <Button type="submit" disabled={loading}>
                Add Doctor
              </Button>
            </form>

            <div className="overflow-x-auto text-sm">
              {doctors.length === 0 ? (
                <p className="text-gray-500">No doctors added yet.</p>
              ) : (
                <table className="w-full text-left text-xs md:text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-1 pr-2">Name</th>
                      <th className="py-1 pr-2">Specialty</th>
                      <th className="py-1 pr-2">Image</th>
                      <th className="py-1 pr-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((d) => (
                      <tr key={d.id} className="border-b last:border-0">
                        <td className="py-1 pr-2">{d.name}</td>
                        <td className="py-1 pr-2">{d.specialty}</td>
                        <td className="py-1 pr-2">
                          <a
                            href={d.image_path}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            View
                          </a>
                        </td>
                        <td className="py-1 pr-2 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => void handleDeleteDoctor(d.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Card>
        </section>
      </div>
    </main>
  )
}


