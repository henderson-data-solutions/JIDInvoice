
// email actions

function sendEmailErrors() {
    var content = {
        "name": "John Doe",
        "company": "Acme Corporation",
        "email": 'jkamaraj@hendersondatasolutions.com',
        "phone": "555-123-4567",
        "category": subject,
        "desc": emailBody
    };
    try {
        $.ajax({
            url: localStorage.getItem("apiSendEmail"),
            type: 'POST',
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify(content, null, 2),
            success: function (data, status, xhr) {
                console.log('Email sent successfully:', data);
                // Check for successful delivery response
                if (data.status === "Success") {
                    console.log('Email was successfully delivered.');
                } else {
                    console.log('Email sending failed:', data.message);
                }
            },
            error: function (xhr, status, error) {
                console.log("Error: " + status + " : " + error);
                console.log("Response: ", xhr.responseText);
            }
        });
    } catch (e) {
        console.error("Exception occurred: ", e);
        $("#result-pane").html("Exception: " + e.message);
    }
}



 

function sendTemplateEmail(htmlContent) {
    // Example email content
    var emailData = {
        to: 'jkamaraj@hendersondatasolutions.com',
        subject: 'Welcome to Our Service',
        body: htmlContent
    };

    // AJAX request to send the email
    fetch('https://uat1.hendersondatasolutions.com:8093/api/PostMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    })
        .then(response => {
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                return response.json().then(error => {
                    throw new Error(error.message);
                });
            }
        })
        .catch(error => {
            console.log("Error: " + error.message);
        });
}

// Function to read HTML file
function readHtmlFile(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            sendMyEmail(data);
        })
        .catch(error => {
            console.log("Error: " + error.message);
        });
}

// Call the function with the path to your HTML file
//readHtmlFile('path/to/your/folder/email-template.html');



function sendEmail() {


    readHtmlFile('/Templates/JIDSolutionsIncCaps.html');
}

function sendMyEmail( subject, emailData) {

    var content1 = {
        "name": emailData.FirstName,
        "company": "Acme Corporation",
        "email": emailData.email, 
        "category": subject,
        "desc": emailBody
    };
    var content = {
    "name": " ",
        "company": " ",
            "email": "jkamaraj@hendersondatasolutions.com",
                "phone": " ",
                    "category": "News letter",
        "desc": "<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H1>"
    };

    try {
        // send request to server to see if we are authenticated.
        //data: JSON.stringify(content, null, 2),
        $.ajax({
            url: localStorage.getItem("apiSendEmail"),
            type: 'POST',
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify(content, null, 2),
            success: function (data, status, xhr) {
                console.log('success');
            },
            error: function (xhr, status, error) {
                console.log("Error: " + status + " : " + error);
            }
        });

    } catch (e) {
        $("#result-pane").html(e)
        console.log("clearkey returned: " + status + " : " + error);
    }

    if (console && console.log) {
        console.log('Values extracted from submitted form', content);
    }


}

function sendMyEmail_(emailBody) {



    var to = Array.from(document.getElementById('inputEmail3').selectedOptions).map(option => option.value);
    var cc = Array.from(document.getElementById('cc').selectedOptions).map(option => option.value);
    var subject = document.getElementById('subject').value;
    var message = $('#message').val();

    var emailData = {
        to: "jeyarani@hotmail.com",
   
        subject: "subject",
        message: "message"
    };




    // Send emailData as JSON using AJAX or any other method
    //  console.log(emailData); // For demonstration, log the emailData object to the console 



    try {
        // send request to server to see if we are authenticated. https://localhost:44398/
        //data: JSON.stringify(content, null, 2),
        $.ajax({
            url: localStorage.getItem("apiSendEmail"),
            type: 'POST',
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify(emailData, null, 2),
            success: function (data, status, xhr) {
                console.log('success');
            },
            error: function (xhr, status, error) {
                console.log("Error: " + status + " : " + error);
            }
        });

    } catch (e) {
        $("#result-pane").html(e)
        console.log("clearkey returned: " + status + " : " + error);
    }

    if (console && console.log) {
        console.log('Values extracted from submitted form', content);
    }


}


function sendEmail(emailBody) {


 
    var to = Array.from(document.getElementById('inputEmail3').selectedOptions).map(option => option.value);
    var cc = Array.from(document.getElementById('cc').selectedOptions).map(option => option.value);
    var subject = document.getElementById('subject').value;
    var message = $('#message').val();


    // Send emailData as JSON using AJAX or any other method
  //  console.log(emailData); // For demonstration, log the emailData object to the console 
 
    var content = {
        "name": "John Doe",
        "company": "Acme Corporation",
        "email": 'jkamaraj@hendersondatasolutions.com',
        "phone": "555-123-4567",
        "category": subject,
        "desc": "this is to test"
    };

    try {
        // send request to server to see if we are authenticated. https://localhost:44398/
        //data: JSON.stringify(content, null, 2),
        $.ajax({
            url: localStorage.getItem("apiSendEmail"),
            type: 'POST',
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify(content), // Make sure content is a properly formatted object
            success: function (data, status, xhr) {
                console.log('success', data);
            },
            error: function (xhr, status, error) {
                console.error("Error: " + status + " : " + error);
                console.error("Response:", xhr.responseText);
            }
        });

    } catch (e) {
        $("#result-pane").html(e)
        console.log("clearkey returned: " + status + " : " + error);
    }

    if (console && console.log) {
        console.log('Values extracted from submitted form', content);
    }


}


function generateEmailBody(
    recipientName,
    recipientPosition,
    recipientCompany,
    recipientAddress,
    cityStateZip,
    yourCompanyName,
    contactInformation,
    yourName,
    yourPosition,
    yourEmailAddress,
    yourPhoneNumber,
    yourCompanyWebsite
) {
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Marketing Letter</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
            }
            .header, .footer {
                text-align: center;
                margin-top: 20px;
            }
            .content {
                margin: 20px;
            }
            h3 {
                color: #2e6c80;
            }
            ul {
                list-style-type: disc;
                margin-left: 20px;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Your Company Letterhead</h1>
            <p>${date}</p>
        </div>

        <div class="content">
            <p>${recipientName}<br>
            ${recipientPosition}<br>
            ${recipientCompany}<br>
            ${recipientAddress}<br>
            ${cityStateZip}</p>

            <p>Dear ${recipientName},</p>

            <p>We hope this letter finds you well. At ${yourCompanyName}, we pride ourselves on providing exceptional IT solutions that meet the diverse needs of our clients. We are excited to introduce our specialized resources available for your upcoming projects: an expert Database Administrator and a proficient .NET Developer.</p>

            <h3>Database Administrator (DBA)</h3>
            <p>Our Database Administrator brings extensive experience in database design, implementation, and maintenance. Key competencies include:</p>
            <ul>
                <li><strong>Database Design & Modeling:</strong> Proficient in designing databases that optimize performance and ensure data integrity.</li>
                <li><strong>Performance Tuning:</strong> Expertise in optimizing database performance through indexing, query optimization, and regular maintenance.</li>
                <li><strong>Backup & Recovery:</strong> Skilled in developing and implementing robust backup and recovery plans to ensure data security.</li>
                <li><strong>Database Security:</strong> Knowledgeable in establishing and maintaining security protocols to safeguard sensitive data.</li>
                <li><strong>Support & Maintenance:</strong> Committed to providing ongoing support to ensure databases run smoothly and efficiently.</li>
            </ul>

            <h3>.NET Developer</h3>
            <p>Our .NET Developer is well-versed in creating scalable and reliable applications. Their skills include:</p>
            <ul>
                <li><strong>Application Development:</strong> Proficient in building web and desktop applications using the .NET framework.</li>
                <li><strong>Framework & Technologies:</strong> Experienced in working with ASP.NET, MVC, Web API, and Entity Framework.</li>
                <li><strong>Database Integration:</strong> Skilled in integrating applications with various databases, ensuring seamless data flow and interaction.</li>
                <li><strong>Front-End Skills:</strong> Knowledgeable in front-end technologies such as HTML, CSS, JavaScript, and popular libraries and frameworks.</li>
                <li><strong>Agile Methodology:</strong> Adheres to agile practices for efficient project management and delivery.</li>
            </ul>

            <p>By leveraging these specialized resources, we are confident that your project will benefit from enhanced performance, reliability, and scalability. Our team is dedicated to ensuring that your project's objectives are met with the highest standards of quality and efficiency.</p>

            <p>We would be delighted to discuss how our Database Administrator and .NET Developer can contribute to the success of your upcoming projects. Please feel free to contact us at ${contactInformation} to schedule a meeting or for any further information.</p>

            <p>Thank you for considering ${yourCompanyName} as your IT solutions partner. We look forward to the opportunity to collaborate with you.</p>

            <p>Best regards,</p>
            <p>${yourName}<br>
            ${yourPosition}<br>
            ${yourCompanyName}<br>
            ${contactInformation}<br>
            <a href="mailto:${yourEmailAddress}">${yourEmailAddress}</a><br>
            ${yourPhoneNumber}<br>
            <a href="${yourCompanyWebsite}">${yourCompanyWebsite}</a></p>
        </div>

        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${yourCompanyName}. All rights reserved.</p>
        </div>
    </body>
    </html>`;
}

// Example usage
const emailBody = generateEmailBody(
    "John Doe",
    "CEO",
    "Acme Corporation",
    "123 Main St",
    "Anytown, USA 12345",
    "Your Company",
    "contact@yourcompany.com",
    "Jane Smith",
    "Marketing Manager",
    "jeyarani@hotmail.com",
    "555-555-5555",
    "https://www.yourcompany.com"
);
 


// Function to generate email templates
function generateEmailTemplates(emailData, emailDetails) {
    var emailTemplates = "";
    var index = 0;
    // Loop through emailData array
    emailData.forEach(function (email) {
       // alert('Sender' + email.senderName);
        emailTemplates += `
            <li id="email-list-${index + 1}">
                <div class="d-flex align-self-center">
                    <div class="iq-email-sender-info">
                        <div class="iq-checkbox-mail">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="mailk${index + 1}">
                                <label class="custom-control-label" for="mailk${index + 1}"></label>
                            </div>
                        </div>
                        <span class="ri-star-line iq-star-toggle"></span>
                        <a href="javascript:getEmailDetails('${email.senderEmail}',${index + 1});" class="iq-email-title">${email.sender}</a>
                    </div>
                    <div class="iq-email-content">
                        <a href="javascript:getEmailDetails('${email.senderEmail}',${index + 1});" class="iq-email-subject">${email.subject}<span>${email.message}</span></a>
                        <div class="iq-email-date">${email.time}</div>
                    </div>
                </div>
            </li>
         <div id="email-app-details-${index + 1}" class="email-app-details">   </div>
        `;
        index = index + 1;
    });

    return emailTemplates;
}


function createEmailDetails(email) {
   
    var template = `

                    <div class="iq-card">
                        <div class="iq-card-body p-0">
                            <div class="iq-email-to-list p-3">
                                <div class="d-flex justify-content-between">
                                    <ul>
                                        <li class="mr-3">
                                            <a href="javascript: void(0);">
                                                <h4 class="m-0"><i class="ri-arrow-left-line"></i></h4>
                                            </a>
                                        </li>
                                        <li data-toggle="tooltip" data-placement="top" title="Mail"><a href="#"><i class="ri-mail-open-line"></i></a></li>
                                        <li data-toggle="tooltip" data-placement="top" title="Info"><a href="#"><i class="ri-information-line"></i></a></li>
                                        <li data-toggle="tooltip" data-placement="top" title="Delete"><a href="#"><i class="ri-delete-bin-line"></i></a></li>
                                        <li data-toggle="tooltip" data-placement="top" title="Unread"><a href="#"><i class="ri-mail-unread-line"></i></a></li>
                                        <li data-toggle="tooltip" data-placement="top" title="Transfer"><a href="#"><i class="ri-folder-transfer-line"></i></a></li>
                                        <li data-toggle="tooltip" data-placement="top" title="Bookmark"><a href="#"><i class="ri-bookmark-line"></i></a></li>
                                    </ul>
                                    <div class="iq-email-search d-flex">
                                        <ul>
                                            <li class="mr-3">
                                                <a class="font-size-14" href="#">1 of 505</a>
                                            </li>
                                            <li data-toggle="tooltip" data-placement="top" title="Previous"><a href="#"><i class="ri-arrow-left-s-line"></i></a></li>
                                            <li data-toggle="tooltip" data-placement="top" title="Next"><a href="#"><i class="ri-arrow-right-s-line"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-0">
                            <div class="iq-inbox-subject p-3">
                                <h5 class="mt-0">${email.subject}</h5>
                                <div class="iq-inbox-subject-info">
                                    <div class="iq-subject-info">
                                        <img src="../images/user/user-1.jpg" class="img-fluid rounded-circle" alt="#">
                                        <div class="iq-subject-status align-self-center">
                                            <h6 class="mb-0">${email.senderName} <a href="${email.senderEmail}">${email.senderEmail}</a></h6>
                                            <div class="dropdown">
                                                <a class="dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    to Me
                                                </a>
                                                <div class="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                    <table class="iq-inbox-details">
                                                        <tbody>
                                                            <tr>
                                                                <td>from:</td>
                                                                <td>Medium Daily Digest</td>
                                                            </tr>
                                                            <tr>
                                                                <td>reply-to:</td>
                                                                <td>noreply@gmail.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>to:</td>
                                                                <td>${email.recipientEmail}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>date:</td>
                                                                <td>${email.date}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>subject:</td>
                                                                <td>${email.subject}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>security:</td>
                                                                <td>Standard encryption</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="float-right align-self-center">${email.date}</span>
                                    </div>
                                    <div class="iq-inbox-body mt-5">
                                        <p>${email.body}</p>
                                        <p class="mt-5 mb-0">Regards,<span class="d-inline-block w-100">John Deo</span></p>
                                    </div>
                                    <hr>
                                    <div class="attegement">
                                        <h6 class="mb-2">ATTACHED FILES:</h6>
                                        <ul>
                                            ${email.attachments.map(attachment => `
                                            <li class="icon icon-attegment">
                                                <i class="fa fa-file-text-o" aria-hidden="true"></i> <span class="ml-1">${attachment}</span>
                                            </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
    return template;
}