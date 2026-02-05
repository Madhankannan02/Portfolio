import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unusedFile = path.join(__dirname, 'unused_images.txt');

if (!fs.existsSync(unusedFile)) {
    console.log('unused_images.txt not found');
    process.exit(1);
}

const content = fs.readFileSync(unusedFile, 'utf-8');
const files = content.split('\n').map(s => s.trim()).filter(s => s);

files.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        try {
            fs.unlinkSync(fullPath);
            console.log(`Deleted: ${file}`);
        } catch (e) {
            console.error(`Error deleting ${file}:`, e);
        }
    } else {
        console.log(`File not found (already deleted?): ${file}`);
    }
});

console.log('Cleanup complete.');
