/* TODO: Write the task */

function solution() {
  if(document.querySelector('#type_person').checked){
      return validatePerson();
  } else if(document.querySelector('#type_company').checked) {
      return validateCompany();
  }
  
}

const validatePerson = () => {
  const firstName = document.querySelector('#first_name').value;
  const lastName = document.querySelector('#last_name').value;
  const email = document.querySelector('#email').value;
  
  const emailRex = /[a-z,A-Z,0-9\.]+@[a-z,A-Z,0-9\.]+/;
  
  if(!firstName || !lastName || !emailRex.test(email)) return false;
  
  const emailSplit = email.split('@');
  const beforeLen = emailSplit[0].length;
  const afterLen = emailSplit[1].length;
  if(beforeLen > 64 || afterLen > 64) return false;
  return true;
}

const validateCompany = () => {
  const name = document.querySelector('#company_name').value;
  const phone = document.querySelector('#phone').value;
  
  const phoneLen = phone.replace(/-/g, '').length;
  const phoneRex = /^\d+-\d+-\d+$/;
  
  if(!name || phoneLen < 6 || !phoneRex.test(phone)) return false;
  return true;
}
