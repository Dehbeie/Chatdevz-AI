<template>
    <div class="flex h-screen w-screen bg-dark-indigo text-white">


        <!-- Main Chat Area -->
        <main class="flex-1 flex flex-col justify-between p-20 relative">

            <!-- Welcome message / initial text -->
            <div v-if="messages.length === 0" class="text-center mt-12 flex flex-col items-center gap-2">

                <!-- AI Icon -->
                <div
                    class="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#4a4aff] to-[#00F2FF] shadow-[0_0_25px_#00F2FF]">
                    <Cpu class="w-10 h-10 text-white" />
                </div>

                <!-- Heading -->
                <h1 class="text-3xl font-bold leading-relaxed">
                    Hi! I'm your Assistant <br>
                    How can I help you today?
                </h1>

                <!-- Subtext -->
                <p class="text-sm text-gray-400 max-w-md">
                    Ask me anything about product recommendation and I will give you ideas.
                </p>
            </div>

            <!-- Chat messages -->
            <div ref="chatWindow" class="flex-1 overflow-y-auto mb-4 flex flex-col gap-2">
                <div v-for="(msg, index) in messages" :key="index" class="flex">
                    <div :class="msg.type === 'user'
                        ? 'ml-auto bg-indigo-600 text-white'
                        : 'mr-auto bg-indigo-300 text-gray-900'" class="max-w-[70%] p-3 rounded-lg">
                        {{ msg.text }}
                    </div>
                </div>
            </div>

            <!-- Input area -->
            <div class="flex w-full justify-center">
                <input type="text" placeholder="Need quick ideas....." v-model="chatInput"
                    class="px-5 py-3 w-[70%] rounded-l-full border-none outline-none text-[#f0f0f0] bg-transparent text-[16px] shadow-[0_0_10px_#00F2FF] transition-all duration-300 focus:shadow-[0_0_20px_#00F2FF] placeholder:text-[#ccc]"
                    @keyup.enter="sendMessage" />
                <button @click="sendMessage"
                    class="bg-gradient-to-r from-[#4a4aff] to-[#00F2FF] border-none px-6 py-3 rounded-r-full text-white text-[18px] cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#00F2FF]">
                    ➤
                </button>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { Cpu } from 'lucide-vue-next'

// Chat state
const chatInput = ref('')
const messages = ref([])
const chatWindow = ref(null)

// Business Knowledge (NEW)
const businessKnowledge = `
Closette is an online store that sells quality shirts, jackets, and accessories.

Products & Pricing:
- Shirts: $25–$50
- Jackets: $60–$120
- Accessories: $5–$30

Delivery:
- 2–3 days within the United States
- 7–14 days outside the United States
- Free shipping for orders above $50

Return Policy:
- Items can be returned within 7 days of purchase

Delivery Methods:
- Courier
- Postal Service
- Pick-up

Contact:
- Email: support@closette.com
- Phone: +234 123 4567

FAQ:
- How long does delivery take?
- What is your return policy?
- Do you ship internationally?
`;

// n8n webhook URL
const webhookUrl = 'http://localhost:5678/webhook/chatdevz-agent';



// Send message
const sendMessage = async () => {
    const text = chatInput.value.trim()
    if (!text) return

    messages.value.push({ type: 'user', text })
    chatInput.value = ''

    await nextTick()
    chatWindow.value.scrollTop = chatWindow.value.scrollHeight

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                business_id: "Closette",
                userId: "test-user-001",
                message: text,
                sessionId: "session-001"
            })
        })

        const result = await response.text()
        console.log("RAW RESPONSE:", result)

        if (!result) {
            throw new Error("Empty response from webhook")
        }

        const data = JSON.parse(result)

        messages.value.push({
            type: 'ai',
            text: data.message || data.message_reply || result || "No response from AI"
        })

        await nextTick()
        chatWindow.value.scrollTop = chatWindow.value.scrollHeight

    } catch (err) {
        console.error("ERROR:", err)
        messages.value.push({
            type: 'ai',
            text: 'Error connecting to AI'
        })
    }
}
</script>