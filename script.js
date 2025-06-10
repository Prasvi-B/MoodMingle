const moodData = {
  romantic: {
    movie: "10 Things I Hate About You",
    playlist: "https://open.spotify.com/playlist/37i9dQZF1DX14CbVHtvHRB?si=ZsO82BAfSKe3iXEUNBsytQ",
    quote: "Love doesn't make the world go round. Love is what makes the ride worthwhile.",
    wattpadStory: {
      title: "The Billionaire’s Muse",
      description: "An artist and her billionaire client clash and fall in love. Soft, funny, and swoon-worthy.",
      coverImg: "https://www.wattpad.com/user_profile_cover/179818580-256-k500963.jpg",
      link: "https://www.wattpad.com/story/123456-the-billionaire's-muse"
    }
  },
  sad: {
    movie: "Me Before You",
    playlist: "https://open.spotify.com/playlist/10oMJOAD7j7U9XXL8nU9Q9?si=RSxUaQjzSGKzBSZIt1P3NA",
    quote: "Crying is how your heart speaks when your lips can’t explain the pain.",
    wattpadStory: {
      title: "Healing Hearts",
      description: "Two broken souls find healing in friendship, and maybe something more.",
      coverImg: "https://via.placeholder.com/150x200.png?text=Healing+Hearts",
      link: "https://www.wattpad.com/story/654321-healing-hearts"
    }
  },
  angry: {
    movie: "Legally Blonde",
    playlist: "https://open.spotify.com/playlist/37i9dQZF1EIgG2NEOhqsD7?si=gJ0DerVwQ2S0-I22PSvVuA",
    quote: "Don't get mad. Get everything.",
        wattpadStory: {
      title: "Rebel Diaries",
      description: "She’s got sass, style, and a score to settle. Revenge never looked this good.",
      coverImg: "https://via.placeholder.com/150x200.png?text=Rebel+Diaries",
      link: "https://www.wattpad.com/story/789012-rebel-diaries"
    }
  },
  chill: {
    movie: "Midnight in Paris",
    playlist: "https://open.spotify.com/playlist/37i9dQZF1DWTwbZHrJRIgD?si=DKwav-t7TuGqk_Bd4GcEFw",
    quote: "Relax, nothing is under control. And that’s okay.",
    wattpadStory: {
      title: "Cloud Hearts",
      description: "A gentle story set in a bookstore café, with warm drinks and slowburn love.",
      coverImg: "https://via.placeholder.com/150x200.png?text=Cloud+Hearts",
      link: "https://www.wattpad.com/story/987654-cloud-hearts"
    }
  },
  hyped: {
    movie: "Bring It On",
    playlist: "https://open.spotify.com/playlist/6lVYoMMMRKUHeB85FqB8l1?si=BIpNe_4rQF-nGjpbqKhIaA",
    quote: "You're a firework. Own your light. Blow them away.",
    wattpadStory: {
      title: "Star of the Squad",
      description: "A dance-off, a rivalry, and a chaotic romance. High energy, high drama!",
      coverImg: "https://via.placeholder.com/150x200.png?text=Star+of+the+Squad",
      link: "https://www.wattpad.com/story/111222-star-of-the-squad"
    }
  }
};

function setMood(mood) {
  const data = moodData[mood];
  const results = document.getElementById("results");

  results.innerHTML = `
    <h2>🎬 Movie: ${data.movie}</h2>
    <p><strong>🎧 Playlist:</strong> <a href="${data.playlist}" target="_blank">Open on Spotify</a></p>
    <blockquote>🧠 ${data.quote}</blockquote>

    <div class="wattpad-section">
      <h3>📖 Wattpad Story: ${data.wattpadStory.title}</h3>
      <img src="${data.wattpadStory.coverImg}" alt="${data.wattpadStory.title}" />
      <p>${data.wattpadStory.description}</p>
      <a href="${data.wattpadStory.link}" target="_blank">Read on Wattpad</a>
    </div>
  `;
}
