// Pseudo
// create table
// split dna strand into complements
// iterate over array
  // iterate over table
    // if complement is equal to table key
      // concatenate rna to table value
//

export function toRna(dna) {
    let table = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    }
  
    let rna = '';
    let complement = dna.split('');
    for (let i = 0; i < complement.length; i++) {
      for (var key in table) {
        // console.log(key, complement[i]);
        if (key === complement[i]) {
          rna += table[key];
        }
      }
    }
    return rna;
  };