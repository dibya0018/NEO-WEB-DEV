import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()

    // Prepare form data for the API
    const formParams = new URLSearchParams()
    
    // Required fields
    formParams.append("orgId", body.get("orgId") as string || "1750175112727x192042413945782270")
    formParams.append("name", body.get("name") as string)
    formParams.append("phone", body.get("phone") as string)
    
    // Optional fields
    const email = body.get("email") as string
    if (email) formParams.append("email", email)
    
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
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

