<template>
    <q-page class="flex">
      <div>
        Select the file (src\assets\pdf_to_parse.pdf):
        <input type="file" class='red' id="file-input" accept=".pdf" @change="readFile_" />
        <div v-if='filedata' style='color:red;'>
          <hr>
          This needs to be parsed to plain text!
        </div>
        <hr>
        file data: {{filedata}}
      </div> 
    </q-page>
</template>

<!--
// One cannot do this: VueCompilerError: Single file component can contain only one <script> element
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/1.10.100/pdf.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.entry.min.js" ></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/1.10.100/pdf.worker.min.js"></script>
-->

<script>
import { defineComponent } from 'vue';

//função que retorna uma promise pois IO é assíncrono; no .then(arq) ela retorna o conteúdo text do arquivo
import { readFile } from '../functions/read-file'


//configurações do componente PageIndex
export default defineComponent({
    name: 'PageIndex',

    data() {
        return {
            filedata: null,
        }
    },

    methods: {
        readFile_: function() {
            let fileinput_element = document.getElementById('file-input')
            
            const arquivo = readFile(fileinput_element)
                .then(arq => this.filedata = arq)
                .catch(erro => this.filedata = erro)
        }
    },
})
</script>
