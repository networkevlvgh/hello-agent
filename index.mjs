import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await client.responses.create({
    model: "gpt-5",
    instructions: "You are a friendly hello-world agent. Keep your answers short.",
    input: "Say hello and introduce yourself.",
  });

  console.log(response.output_text);
}

main().catch(console.error);
