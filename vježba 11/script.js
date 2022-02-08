//not operator nismo spomenuli

const imaVozackuDozvolu = true;
const dobarVid = true;
const umoran = false;
console.log(imaVozackuDozvolu && dobarVid && !umoran); 

if (imaVozackuDozvolu && dobarVid && !umoran){
    console.log('možeš voziti');
}else {
    console.log('ne možeš vozit');
}