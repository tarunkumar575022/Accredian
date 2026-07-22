import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Lead } from "@/lib/types";

// In a real application, this should be a database.
// For this demo, we'll use a JSON file in the project root or just memory if file fails.
const dataFilePath = path.join(process.cwd(), "leads.json");

// Helper to ensure file exists
function ensureFile() {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.phone || !body.company) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newLead: Lead = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      teamSize: body.teamSize || "Not specified",
      interest: body.interest || "Not specified",
      message: body.message || "",
      createdAt: new Date().toISOString(),
    };

    ensureFile();
    const fileData = fs.readFileSync(dataFilePath, "utf8");
    const leads = JSON.parse(fileData);
    
    leads.push(newLead);
    
    fs.writeFileSync(dataFilePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: "Enquiry submitted successfully",
      id: newLead.id 
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    ensureFile();
    const fileData = fs.readFileSync(dataFilePath, "utf8");
    const leads = JSON.parse(fileData);
    
    return NextResponse.json({ success: true, data: leads });
  } catch (error) {
    console.error("Error reading leads:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
