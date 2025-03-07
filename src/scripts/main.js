AOS.init();


const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEMms = 1000 * 60 * 60 * 24;
    const horaEMms = 1000 * 60 * 60;
    const minutoEMms = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciAteOEvento / diaEMms);
    const horasAteOEvento = Math.floor((distanciAteOEvento % diaEMms) / horaEMms);
    const minutosAteOEvento = Math.floor((distanciAteOEvento % horaEMms) / (1000 * 60));
    const segundosAteOEvento = Math.floor((distanciAteOEvento % minutoEMms) / 1000);
   



    document.getElementById("contador").innerHTML = `${diasAteOEvento} d, ${horasAteOEvento} h, ${minutosAteOEvento} m e ${segundosAteOEvento} s`;


    if ( distanciAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "O evento já começou!";
    }
}, 1000);