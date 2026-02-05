import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const SRC_DIR = path.join(__dirname, 'src');
const ROOT_FILES = [path.join(__dirname, 'index.html'), path.join(__dirname, 'README.md')];

function getAllFiles(dir, exts) {
    let results = [];
    if (!fs.existsSync(dir)) return [];

    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(file, exts));
        } else {
            if (exts.some(ext => file.toLowerCase().endsWith(ext))) {
                results.push(file);
            }
        }
    });
    return results;
}

const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'];
const codeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.md'];

const imageFiles = getAllFiles(ASSETS_DIR, imageExtensions);
const codeFiles = getAllFiles(SRC_DIR, codeExtensions).concat(ROOT_FILES);

const unusedImages = [];

imageFiles.forEach(imagePath => {
    const filename = path.basename(imagePath);
    let isUsed = false;
    for (const codePath of codeFiles) {
        const content = fs.readFileSync(codePath, 'utf-8');
        if (content.includes(filename)) {
            isUsed = true;
            break;
        }
    }
    if (!isUsed) {
        unusedImages.push(path.relative(__dirname, imagePath));
    }
});

fs.writeFileSync('unused_images.txt', unusedImages.join('\n'));
console.log('Done writing unused_images.txt');
