Microsoft Edge is getting better, but it lacks context searching (searching selected text).
I developped this extension to fix this issue, it supports actually 4 providers: Google, DuckDuckGo, Bing and WikiPedia. You can either let them all active, and choose the one you want when searching, or setting one as default provider.

Publishing extensions to the Store is still restricted, I submited a request, and I'm waiting the response.
In the meantime, you can use the extension by downloading the appx package from the Releases page, and then sideloading it by following these steps:

  1- Enabling Sideloaded apps:
    Go to Settings>Update And Security>For Developers, and then select 'Sideload apps'
    
    ![alt text](https://raw.githubusercontent.com/hichamboushaba/Right-Click-Search-for-Microsoft-Edge/master/imgs/Sideload.PNG)
    
  2- Install the Extension by running the following command in Powershell as Administrator:
      
      Add-AppxPackage   Path-to-Appx\Right-Click-Search.appx

