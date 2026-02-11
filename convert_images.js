import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirsToSearch = ['src', 'public'];
const extensions = ['.png', '.jpg', '.jpeg'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

async function convertImages() {
    let allFiles = [];
    dirsToSearch.forEach(dir => {
        const fullPath = path.join(__dirname, dir);
        if (fs.existsSync(fullPath)) {
            allFiles = allFiles.concat(getAllFiles(fullPath));
        }
    });

    const imageFiles = allFiles.filter(file => extensions.includes(path.extname(file).toLowerCase()));

    console.log(`Found ${imageFiles.length} images to convert.`);

    for (const file of imageFiles) {
        const ext = path.extname(file);
        const newFile = file.replace(ext, '.webp');

        console.log(`Converting ${file} to ${newFile}...`);

        try {
            await sharp(file)
                .webp({ quality: 80 })
                .toFile(newFile);
            console.log(`Successfully converted: ${newFile}`);
        } catch (error) {
            console.error(`Error converting ${file}:`, error);
        }
    }
}

convertImages();
