module.exports = {
  'apiurl':'http://localhost:1810',
  'host': 'mongodb',
  'port': 1810,
  'secret' : "AVLMS",
  'iotHub':'',
  'db': {
    'endpoint' : "https://harish.documents.azure.com:443/",
    'primaryKey' : "",
    'database' : "AVLMS",
    //'url':''
    'url':'mongodb://user:password@domain:28000/AVLMS?authSource=admin',
    // 'url':'mongodb://localhost/AVLMS'
  },
  'smtp_details':{
    'email':'email',
    'password':'password',
    'host':'smtp.office365.com',
    'port':587,
    'authMethod':'NTLM',
  },
  'mailOptions':{
    'from':'Harish Mahajan <hmahajan.dmi@gmail.com>'
  }
};
