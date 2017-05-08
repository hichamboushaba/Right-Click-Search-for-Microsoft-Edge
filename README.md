## Right Click Search for Microsoft Edge

Microsoft Edge is getting better, but it lacks context searching (searching selected text).
I developped this extension to fix this issue, it supports actually 4 providers: Google, DuckDuckGo, Bing and WikiPedia. You can either let them all active, and choose the one you want when searching, or setting one as default provider.

#### Installation:
Publishing extensions to the Store is still restricted, I submited a request, and I'm waiting the response.
In the meantime, you can use the extension by downloading the appx package and the certificate from [here](https://github.com/hichamboushaba/Right-Click-Search-for-Microsoft-Edge/releases/latest), and then sideloading it by following these steps:

  1- Enabling Sideloaded apps:
    Go to Settings>Update And Security>For Developers, and then select 'Sideload apps'
    
   ![sidload](/imgs/Sideload.PNG?raw=true)
    
  2- Install the certificate to the Trusted People store:<br/>
  		&emsp;a- open the certificate, then click on 'Install Certificate'.<br/>
    	&emsp;b- Select 'Local Machine' in Store Location and click Next.<br/>
    	&emsp;c- Select 'Place certificates in the following store'.<br/>
    	&emsp;d- Click on Browse and select 'Trusted People'.<br/>
    	&emsp;e- Click on Next then Finish to complete the process.
    
  3- Install the Extension by running the following command in Powershell as Administrator:
      
      Add-AppxPackage   Path-to-Appx\Right-Click-Search.appx
      
     You can also double click the package to install it if you have [App Installer](https://www.microsoft.com/en-us/store/p/app-installer/9nblggh4nns1) application installed.


#### Screenshots:
  
  <img src="./imgs/screenshot1.jpg?raw=true" width="400"/>
  
  <img src="./imgs/screenshot2.jpg?raw=true" width="400"/>
  
  
## LICENCE

This project is licensed under GPLv3 (read the LICENCE file).
