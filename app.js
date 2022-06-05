const accessToken = "IGQVJWcFpRc3JQVzZAvdGd5MmpET1FSWFREUG9MUlNlNzkzbU1tRm5qTlRHTUVENThFNnlsa0VHTVRIdG5yaC14a1hUak56aXB2cUhhV080cUpHbzVLVEVmMUVBZAGpvaVB1ZA1FBMUdZATTR3VjVzUjlDSQZDZD"
const fields = "id,media_type,media_url,timestamp,permalink"
const apiUrl = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}`
const sectionTag = document.querySelector("section")

const fetchPosts = async () => {
    try {
        const response = await fetch(apiUrl)
        const {data} = await response.json()

        data.forEach(() => {
            let a = document.createElement("a")
            a.href = post.permalink
            a.target = "_blank"
            a.rel = "noreferrer noopener"

            if (post.media_type === "VIDEO") {
                let video = document.createElement("video")
                video.src = post.media_url
                video.preload = true
                video.autoplay = true
                video.mutted = true
                video.loop = true
                a.appendChild(video)
            } else {

                let img = document.createElement("img")
                img.src = post.media_url 
                a.appendChild(img)
            }

            sectionTag.appendChild(a)
        })


    } catch (error) {

    }
}

fetchPosts()