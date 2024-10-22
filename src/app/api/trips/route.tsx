import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonFile = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonFile);

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
