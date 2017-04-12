class Algorithm {


    setEncryptText(str) {
        // this.encryptText - это то значение, которое я ввиду
        // str - параметр нашей функции
        this.encryptText = str;
    }

    setDecryptText(str) {
        this.decryptText = str;
    }

    encrypt() {
        return this.encryptText;
    }

    decrypt() {
        return this.decryptText;
    }

    getResult(typeAction) {
        if (typeAction === 'encrypt') {
            return this.encrypt();
        } else if (typeAction === 'decrypt') {
            return this.decrypt();
        }
    }
}

    // Algorithm #1
class Algorithm_0 extends Algorithm {

    isEncrypted(str) {
        return str.match( /a/g );
    }

    encrypt() {
        return this.encryptText.replace(/a/g, '%1%');
    }

    decrypt() {
        return this.decryptText.replace(/%1%/g, 'a');
    }
}

    // Algorithm #2
class Algorithm_1 extends Algorithm {
    isEncrypted(str) {
        return str.match( /b/g );
    }

    encrypt() {
        return this.encryptText.replace(/b/g, '%1%');
    }

    decrypt() {
        return this.decryptText.replace(/%1%/g, 'b');
    }
}

    // UI logic
$(function () {

    const listAlg = [Algorithm_0, Algorithm_1];
    let currentAlg = new listAlg[0]();

    // смена алгоритвов
    // по нажатию сменить
    $('input[name=algorithm]').on('change', function () {
        // listAlg - это либо 0 или 1 алгоритм
        // this - это контекст input[name=algorithm]
        currentAlg = new listAlg[$(this).val()]();
    });

    // очищаю textarea
    $('input').click(function(){
        $('textarea').val('');
    });

     // Зашифровать или разшифровать
     $('button.btn-encrypt').click(function () {

         let val = $('input[name=encrypt]').val();
         if ( currentAlg.isEncrypted(val) ) {
             currentAlg.setEncryptText(val);
             $('textarea[name=result]').val(currentAlg.getResult('encrypt'));
         } else {
             currentAlg.setDecryptText(val);
             $('textarea[name=result]').val(currentAlg.getResult('decrypt'));
         }

        $('input').val('');
     });

    // Зашифровать или разшифровать
     $('button.btn-decrypt').click(function () {

         let val = $('input[name=decrypt]').val();
         if ( currentAlg.isEncrypted(val) ) {
             currentAlg.setEncryptText(val);
             $('textarea[name=result]').val(currentAlg.getResult('encrypt'));
         } else {
             currentAlg.setDecryptText(val);
             $('textarea[name=result]').val(currentAlg.getResult('decrypt'));
         }

        $('input').val('');
     });

    // зашифровать
    // $('button.btn-encrypt').click(function () {
    //     currentAlg.setEncryptText($('input[name=encrypt]').val());
    //     $('textarea[name=result]').val(currentAlg.getResult('encrypt'));
    //     $('input').val('');
    // });

    // разшифровать
    // $('button.btn-decrypt').click(function () {
    //     currentAlg.setDecryptText($('input[name=decrypt]').val());
    //     $('textarea[name=result]').val(currentAlg.getResult('decrypt'));
    //     $('input').val('');
    // });

});




