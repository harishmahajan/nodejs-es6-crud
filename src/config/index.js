module.exports = {
  'apiurl':'http://localhost:1810',
  'host': 'mongodb',
  'port': 1810,
  'secret' : "AVLMS",
  'iotHub':'HostName=isgavlmsiothub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=sgY31M3M3diUqnMSK6+9s7GrQBI4j5stIN9Sprtwogw=',
  'db': {
    'endpoint' : "https://atozdb.documents.azure.com:443/",
    'primaryKey' : "kAdcKmqelMCbXTkxeoFN6OOtdKquI2iqguOxhBH1vv1w7iXVqhsY1VqKjaD4S0A3Vahlx8OI6UNjwrPNhu63xA==",
    'database' : "AVLMS",
    //'url':'mongodb://isgavlms:kAdcKmqelMCbXTkxeoFN6OOtdKquI2iqguOxhBH1vv1w7iXVqhsY1VqKjaD4S0A3Vahlx8OI6UNjwrPNhu63xA==@isgavlms.documents.azure.com:10255/?ssl=true&replicaSet=globaldb'
    'url':'mongodb://atozsa:And2088!@api.atozinfoway.in:28000/AVLMS?authSource=admin',
    // 'url':'mongodb://localhost/AVLMS'
  },
  'smtp_details':{
    'email':'admin@atozcomputers.in',
    'password':'Dev@20881',
    'host':'smtp.office365.com',
    'port':587,
    'authMethod':'NTLM',
  },
  'mailOptions':{
    'from':'AtoZ Admin <admin@atozcomputers.in>'
  }
  
};
