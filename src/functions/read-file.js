var strFileContent

export function readFile(btnTypeFile) {
    const promisseFile = new Promise((resolve, reject) => {
        try {
            // file selected by user
            let file = btnTypeFile.files[0]
            
            //Read File Metadata
            let reader = new FileReader();
    
            // read file as text file 
            reader.readAsText(file);
    
            // event fired when file reading finished
            reader.addEventListener('load', function(e) {
                // contents of the file (vai para ficar disponível para outros métodos no 'resolve()')
                strFileContent = e.target.result;
                resolve(strFileContent)
            });
    
            // event fired when file reading failed
            reader.addEventListener('error', function() {
                reject('Erro ao ler arquivo (ele pode ter sido renomeado ou apagado). Selecione-o novamente, por favor.');
            });
        
         } catch (error) {
            let msg = ''
            if(error.message == "Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'.")
                msg = 'Please select a file'
            else
                msg = 'File not found (' + error.message + ')'
            reject(msg)
        }
    })
    return promisseFile
};

