import { getRequestConfig } from 'next-intl/server'


// export default getRequestConfig(async ({ locale }) => ({
//     messages: (await import(`/src/data/i18n/${locale}.json`)).default
// }))

export default getRequestConfig(async ({ locale }) => {
    const messagesCommon = await import(`/src/data/i18n/${locale}/common.json`)
    const messagesDisplay = await import(`/src/data/i18n/${locale}/display.json`)

    // 모든 messages를 합치거나 필요에 따라 처리
    const combinedMessages = {
        ...messagesCommon,
        ...messagesDisplay
    }

    console.log("combinedMessages");
    console.log(combinedMessages);

    return {
        messages: combinedMessages
    }
})
