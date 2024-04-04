import React, { useEffect } from 'react';

const Chat = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)
     
        script.onload = () => {
            window.botpressWebChat.init({
                "composerPlaceholder": "Chat with Cinecraft Assistant",
                "botConversationDescription": "Stuck on Cinecraft? I'm Cinecraft Assistant, your AI guide to cinematography, screenwriting, and editing. Ask away!",
                "botId": "88fd362b-41d2-4212-9e44-3b645756addb",
                "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
                "messagingUrl": "https://messaging.botpress.cloud",
                "clientId": "88fd362b-41d2-4212-9e44-3b645756addb",
                "webhookId": "af8ee231-ca27-47e2-94e4-5b349cb6e4eb",
                "lazySocket": true,
                "themeName": "prism",
                "botName": "Cinecraft Assistant",
                "avatarUrl": "https://i.postimg.cc/fb62V81N/logo.jpg",
                "stylesheet": "https://webchat-styler-css.botpress.app/prod/b63c1447-e8f8-4bfd-ac9c-61551241e89e/v46352/style.css",
                "frontendVersion": "v1",
                "theme": "prism",
                "themeColor": "#2563eb"
            });
        }
      }, [])
    return (
        <div id='webchat'/>
    )
}
export default Chat;