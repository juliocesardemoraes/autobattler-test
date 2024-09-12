const fs = require('fs-extra');
const path = require('path');

// Source and destination directories
const sourceDir = './files/';

// 000 - 024 - 048 - 072
// 001 - 025 - 049 - 073
// /24 = 0      /24 = 24*1 /24 = 24*2 /24 = 24*3              

(async()=>{
    const files = await fs.readdir(sourceDir);

    const spritePointers = {
        "secondSprite": 20,
        "thirdSprite": 40,
        "fourthSprite": 60
    }
    for(let i=0; i<15; i++){
        const destDir = `./files/${i}`;


        await fs.move(`./files/${files[i]}`,`${destDir}/${files[i]}`);
        await fs.move(`./files/${files[spritePointers.secondSprite]}`,`${destDir}/${files[spritePointers.secondSprite]}`);
        await fs.move(`./files/${files[spritePointers.thirdSprite]}`,`${destDir}/${files[spritePointers.thirdSprite]}`);
        await fs.move(`./files/${files[spritePointers.fourthSprite]}`,`${destDir}/${files[spritePointers.fourthSprite]}`);
        
        spritePointers.secondSprite++;
        spritePointers.thirdSprite++;
        spritePointers.fourthSprite++;
    }
})()

// for(let i=0; i<20;i++){
//     const destDir = `./${i}`;
//     const folderPath = path.join(sourceDir, destDir);

//     fs.mkdir(folderPath, { recursive: true }, (err) => {
//         if (err) {
//             console.error('Error creating folder:', err);
//         } else {
//             console.log('Folder created successfully!');
//         }
//     });
// }

// // Ensure destination directory exists
// fs.ensureDirSync(destDir);

// // Function to move files based on their names
// async function moveFiles() {
//   try {
//     // Read files from source directory
//     const files = await fs.readdir(sourceDir);

//     for (const file of files) {
//       // Skip if it's not a file
//       const filePath = path.join(sourceDir, file);
//       const stat = await fs.stat(filePath);
//       if (!stat.isFile()) continue;

//       // Determine destination folder based on the first letter of the file name
//       const firstLetter = file[0].toUpperCase();
//       const targetDir = path.join(destDir, firstLetter);

//       // Ensure the target folder exists
//       await fs.ensureDir(targetDir);

//       // Move the file to the target folder
//       const targetPath = path.join(targetDir, file);
//       await fs.move(filePath, targetPath);

//       console.log(`Moved: ${file} -> ${targetDir}`);
//     }
//   } catch (err) {
//     console.error('Error moving files:', err);
//   }
// }

// moveFiles();