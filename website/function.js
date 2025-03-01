async function fetchInstagramPosts() {
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink&access_token=${accessToken}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const posts = data.data.slice(0, 3); // Get latest 3 posts

        const embedContainer = document.querySelector('.instagram-embed');
        embedContainer.innerHTML = posts.map(post => `
            <iframe src="${post.permalink}/embed" width="320" height="400" frameborder="0"></iframe>
        `).join('');
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
    }
}

fetchInstagramPosts();