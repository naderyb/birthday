# 🎨 Customization Guide

This guide will help you personalize the birthday website to make it even more special.

## 📝 Changing the Message

To customize the personal message, edit the `index.html` file:

1. Open `index.html` in any text editor
2. Find the `<div class="message-box">` section (around line 24)
3. Edit the text inside the `<p class="message">` tags
4. Update the signature in `<span class="sender">` to your name or keep it anonymous

### Example Personalization:
```html
<p class="message">
    Hey [Name], I know it's been a while since we last talked...
</p>
```

## 🎨 Changing Colors

### Background Gradient
Edit `styles.css`, line 9:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Change the hex colors to your crush's favorite colors!

### Title Color
Edit `styles.css`, line 93:
```css
color: #667eea;  /* Change this to any color */
```

### Button Colors
Edit `styles.css`, line 204:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🎵 Music Volume

To adjust the music volume, edit `script.js`, line 87:
```javascript
gainNode.gain.setValueAtTime(0.3, startTime);  // Change 0.3 to 0.1-0.5
```
- Lower values (0.1) = quieter
- Higher values (0.5) = louder

## 🎈 More Balloons

To add more balloons, edit `index.html` around line 14:
```html
<div class="balloon balloon-6">🎈</div>
<div class="balloon balloon-7">🎈</div>
```

Then add corresponding CSS in `styles.css`:
```css
.balloon-6 {
    animation-delay: 2.5s;
}
```

## 🎂 Change Emojis

You can replace emojis throughout the site:
- Balloons: 🎈 → 🎉, 🌟, 💙, 🌹
- Cake: 🎂 → 🧁, 🍰, 🎁
- Title: 🎉 → 🎊, ✨, 💫

## 🌈 Confetti Colors

To change confetti colors, edit `script.js`, line 20:
```javascript
const colors = [
    '#ff6b6b',  // Red
    '#4ecdc4',  // Teal
    '#45b7d1',  // Blue
    // Add more hex colors here!
];
```

## 📱 Advanced Customizations

### Add Background Music
Instead of the button, you can auto-play background music (note: some browsers block autoplay):

```javascript
window.addEventListener('load', () => {
    playHappyBirthday();
});
```

### Add Your Photo
Add an image to the card by inserting in `index.html`:
```html
<div class="photo-container">
    <img src="your-photo.jpg" alt="Us together">
</div>
```

And style it in `styles.css`:
```css
.photo-container {
    text-align: center;
    margin: 30px 0;
}

.photo-container img {
    max-width: 300px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```

### Make It More Personal
Add inside facts, shared memories, or inside jokes to make it uniquely yours!

## 💡 Tips

1. **Test after every change** - Open the HTML file in your browser to see changes
2. **Keep backups** - Save a copy before making major edits
3. **Use meaningful colors** - Choose colors that have significance to your relationship
4. **Don't overdo it** - Sometimes simple is more heartfelt
5. **Spell check** - Make sure there are no typos in your personal message!

## 🆘 Need Help?

If something breaks:
1. Check the browser console (F12) for errors
2. Make sure all quotation marks are closed properly
3. Verify all HTML tags have closing tags
4. Compare with the original files in the repository

---

Remember: The most important part is the genuine feeling behind it! 💙