const informationSet = [
  {
    name: 'Alba',
    surname: 'Silvertongue',
    phone: 999999999,
  },
  {
    name: 'Mariajo',
    surname: 'Asriel',
    phone: 777777777,
  },
  {
    name: 'Pedro',
    surname: 'Garcia',
    phone: 333333333,
  },
];

const select = document.querySelector('.select');
const name = document.querySelector('.name');
const lastName = document.querySelector('.lastName');
const phoneNumber = document.querySelector('.phoneNumber');

function completeForm() {
  if (select.value === 'Alba') {
    name.value = informationSet[0].name;
    lastName.value = informationSet[0].surname;
    phoneNumber.value = informationSet[0].phone;
  } else if (select.value === 'Mariajo') {
    name.value = informationSet[1].name;
    lastName.value = informationSet[1].surname;
    phoneNumber.value = informationSet[1].phone;
  }
  if (select.value === 'Pedro') {
    name.value = informationSet[2].name;
    lastName.value = informationSet[2].surname;
    phoneNumber.value = informationSet[2].phone;
  }
}

select.addEventListener('change', completeForm);
