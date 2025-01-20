/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Krishna Narva",
        designation1 : "Human Resource(HR) Manager, Spectropy Edutech Pvt. Ltd.",
        image1 : "assets/images/references-page/IMG_3.png",
        message1 : "Dhanunjaya is one of the smartest individuals in Spectropy Edutech Pvt. Ltd. Though he takes his time to analyze tasks thoroughly, he ensures they are completed with perfection. His meticulous approach and reliability make him a standout performer in our organization.",
        

        sl2:2,
        name2 : "Naresh Gundemoni",
        designation2 : "Project Manager, Spectropy Edutech Pvt. Ltd.", 
        image2: "assets/images/references-page/IMG_4.png",
        message2 : "Dhanunjaya stands out with his exceptional creativity and quick problem-solving ability. Unlike others, his responsiveness and dedication ensure tasks are not only completed swiftly but also innovatively. He’s a true asset to our team at Spectropy Edutech Pvt. Ltd.",
        
        
    },

    {
        sl1:3,
        name1 : "Rahul Vishwakarma",
        designation1 : "Team Lead, Spectropy Edutech Pvt. Ltd.",
        image1 : "assets/images/references-page/IMG_5.png",
        message1 : "As a close friend and classmate, I’ve always been impressed by Dhanunjaya's talent and unique ideologies. His enriched behavior, excellent communication skills, and determination to give his best inspire everyone around him. Working with him is both motivating and rewarding, as he never fails to exceed expectations.",
        

        sl2:4,
        name2 : "Jaya Suda",
        designation2 : "Senior Lecturer, Computer Science Department, University College Of Science",
        image2 : "assets/images/references-page/IMG_2.png",
        message2 : "Dhanunjaya has always stood out among his peers during his time at the University College of Science. His grasp of concepts, creative thinking, and ability to apply knowledge to practical problems are commendable. He exhibits maturity and a strong sense of responsibility, which distinguishes him from others. I am confident he will excel in any role he undertakes.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
