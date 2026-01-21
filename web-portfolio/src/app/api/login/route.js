import { MongoClient } from 'mongodb';

export async function GET(req) {
  // 1. Get code from URL
  const code = new URL(req.url).searchParams.get('code')?.trim();

    if (!code) {
      return Response.json({ valid: false });
    }

  // 2. Connect to MongoDB
  const client = new MongoClient("mongodb+srv://ciandonnelly81_db_user:DXghAZAYoCqycQKg@portfoliopage.l6sutqa.mongodb.net/?appName=PortfolioPage");

  try {
    await client.connect();
    console.log("Connected to the database");

    // 3. Check database
    const db = client.db("Portfolio_Code");
    const users = db.collection("user");

    // 4. Return result
    const user = await users.findOne({ code });
        const valid = !!user;

    return Response.json({ valid });

  } catch (error) {
    console.log("MongoDB error:", error.message);
    return Response.json({ valid: false });
  } finally {
    await client.close();
  }
}