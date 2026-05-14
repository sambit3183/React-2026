

// Import and export are Es5 module feature that let you share code between Javascript files.

// Import : It gets imported from other modules .
// Export : It gets exported for other modules.

// Two types :
        //1. default import / export 
        //2. named import / export

// Default :
        //1. One value per one file 
        //2. any name you can give while import 
        //3.  no {} needed
        //4. ex: export default greet;
        //5. ex: import any from "./filename.js";


// Named :
        //1. Multiple valuees per one file .
        // 2. exact name while importing .
        //3. needed {}
        //4. ex: export {greet,hello};
        //5. ex: import{greet,hello }from "./filename.js";





        export default function ageCalulator(b_year){

            // return 2026 - b_year ;
            let curr_year = new Date().getFullYear();
            return curr_year - b_year ;
        }




