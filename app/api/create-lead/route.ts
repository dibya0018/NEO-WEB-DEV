import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()

    // Validate required fields
    const name = body.get("name") as string
    const phone = body.get("phone") as string

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required" },
        { status: 400 }
      )
    }

    // Prepare form data for the API
    const formParams = new URLSearchParams()
    
    // Required fields
    formParams.append("orgId", body.get("orgId") as string || "1750175112727x192042413945782270")
    formParams.append("name", name.trim())
    formParams.append("phone", phone.trim())
    
    // Optional fields
    const email = body.get("email") as string
    if (email && email.trim()) formParams.append("email", email.trim())
    
    const description = body.get("description") as string
    if (description) formParams.append("description", description)
    
    const sourceURL = body.get("sourceURL") as string
    if (sourceURL) formParams.append("sourceURL", sourceURL)
    
    // UTM parameters
    const utmCampaign = body.get("utmCampaign") as string
    if (utmCampaign) formParams.append("utmCampaign", utmCampaign)
    
    const utmContent = body.get("utmContent") as string
    if (utmContent) formParams.append("utmContent", utmContent)
    
    const utmMedium = body.get("utmMedium") as string
    if (utmMedium) formParams.append("utmMedium", utmMedium)
    
    const utmSource = body.get("utmSource") as string
    if (utmSource) formParams.append("utmSource", utmSource)
    
    const gclid = body.get("gclid") as string
    if (gclid) formParams.append("gclid", gclid)

    // Make the API call
    const response = await fetch("https://api.fyndbetter.com/create_lead", {
      method: "POST",
      headers: {
        "X-Auth-Key": "X5nRu8LcD97qW0Vm34AzEyKp1TBsGHq4",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString(),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.resp?.message || "Failed to create lead" },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    )
  }
}

