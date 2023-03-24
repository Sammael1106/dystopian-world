import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const imagesPath = path.join(process.cwd(), 'src', 'pages', 'api', 'buffalo-slider.json');
  const imagesJson = fs.readFileSync(imagesPath, 'utf-8');
  const imagesData = JSON.parse(imagesJson);

  res.status(200).json(imagesData);
}