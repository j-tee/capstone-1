/* eslint-disable no-lonely-if */
/* eslint-disable template-curly-spacing */
/* eslint-disable linebreak-style */
const ourStaff = [
  {
    id: 1,
    firstName: 'James',
    lastName: 'Tetteh',
    position: 'CEO',
    gender: 'Male',
    img: '../assets/images/profile-pic-1.png',
    profile: `Lorem, ipsum dolor sit amet 
    culpa consectetur cupiditate vitae amet 
    aliquam non necessitatibus iste.`,
  },
  {
    id: 2,
    firstName: 'Frank',
    lastName: 'Duku',
    position: 'CFO',
    gender: 'Male',
    img: '../assets/images/profile-pic-2.png',
    profile: `Lorem, ipsum dolor sit amet 
    culpa consectetur cupiditate vitae amet 
    aliquam non necessitatibus iste.`,
  },
  {
    id: 3,
    firstName: 'Ralph',
    lastName: 'Otoo',
    position: 'General Manager',
    gender: 'Male',
    img: '../assets/images/profile-pic-3.png',
    profile: `Lorem, ipsum dolor sit amet 
    consectetur adipisicing elit. Consequatur.`,
  },
  {
    id: 4,
    firstName: 'Robin',
    lastName: 'Clark',
    position: 'Marketing Executive',
    gender: 'Male',
    img: '../assets/images/profile-pic-4.png',
    profile: `Lorem, ipsum dolor sit amet 
    consectetur adipisicing elit. Consequatur`,
  },
  {
    id: 5,
    firstName: 'Desmond',
    lastName: 'Brown',
    position: 'Chief Accountant',
    gender: 'Male',
    img: '../assets/images/profile-pic-5.png',
    profile: `Lorem, ipsum dolor sit amet 
    consectetur adipisicing elit. Consequatur, 
    .`,
  },
  {
    id: 6,
    firstName: 'Emmanuel',
    lastName: 'Mensah',
    position: 'Managing Director',
    gender: 'Male',
    img: '../assets/images/profile-pic-6.png',
    profile: `Lorem, ipsum dolor sit amet 
    consectetur adipisicing elit. Consequatur`,
  },
];

const win = window.matchMedia('(min-width: 768px)');
const btn = document.querySelector('.more');
let more = false;
let len;
// let match = true;

const staffProfile = (more) => {
  len = ourStaff.length;
  if (!win.matches && !more) {
    len = ourStaff.length / 3;
  }
  const container = document.getElementById('stafflist');
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  ourStaff.forEach((staff, index) => {
    if (index <= len) {
      const profiles = `<div class="staff"> <div>
  <img
    class="staff-pic-bg"
    src="./assets/images/bg-image.jpg"
    alt=""
    class="bg-image"
  />
  <img
    class="staff-pic"
    src=${staff.img}
    alt=""
  />
</div>
<div class="profile">
  <h4>${staff.lastName} ${staff.firstName}</h4>
  <p>${staff.position}</p>
  <p>
    ${staff.profile}
  </p>
</div>
</div>`;
      container.insertAdjacentHTML('beforeend', profiles);
    }
  });
};

btn.addEventListener('click', () => {
  more = !more;
  staffProfile(more);
});

window.addEventListener('load', () => {
  staffProfile(more);
});