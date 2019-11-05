// Build a simple byline block
// Requirements:
// - the function must accept a valid object format. See bylines const.
// - the function must remove invalid objects
// - the function must output a byline string.
// - A byline string must start with a "By"
// - Authors must be separated by a comma "," if there are more than 2.
// - The last Author must be separated by an "and"
// - the Author must be wrapped by the style specified in the "block" parameter
// - assume the we support the <i> and <b> html tag
// 
// Example:
// <p> By <b>Jonah Engel Bromwich</b>, <i>Matthew Schneier</i> and Niraj Chokshi </p>

const bylines = {
  authors: [
    {
      firstName: "jonah",
      middleName: "Engel",
      lastName: "bromwich",
      block: {
        __typename: "Bold"
      }
    },
    {random: "node"},
    {},
    {
      firstName: "matthew",
      middleName: "",
      lastName: "sChneier",
      block: {
        __typename: "Italics"
      }
    },
    {
      firstName: "Niraj",
      middleName: "",
      lastName: "chokshi",
      block: {
      }
    }
  ],
};

function buildByline(bylines) {
  let bylineString = "By ";
  let bylineArr = [];
  const bylinesArr = bylines.authors;
  const par = document.createElement('p');
  
  if(!bylinesArr.length){
  	return '';
  }
  
  for(let byline of bylinesArr) {
      if(byline.firstName && byline.lastName) {
        const { firstName, lastName } = byline;
        const fullName = `${firstName} ${byline.middleName} ${lastName}`;
        let nameElem = '';
        if(byline.block){
          if(byline.block.__typename === 'Italics'){
            nameElem = `<i>${fullName} </i>`;
          }else if(byline.block.__typename === 'Bold'){
            nameElem = `<b>${fullName} </b>`;
          }else {
          nameElem = `${fullName}`;
        }
        }
        console.log(nameElem);
        bylineArr.push(nameElem);
      }
  }
  console.log(bylineArr);
  bylineString += bylineArr.join(', ');
  bylineString = `<p>${bylineString}</p>`;
  return bylineString;
}
document.getElementById("byline").innerHTML = buildByline(bylines);
