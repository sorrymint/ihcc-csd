# Computer Software Development Club Website

:'######:::'######::'########::::::'######::'##:::::::'##::::'##:'########::
'##... ##:'##... ##: ##.... ##::::'##... ##: ##::::::: ##:::: ##: ##.... ##:
 ##:::..:: ##:::..:: ##:::: ##:::: ##:::..:: ##::::::: ##:::: ##: ##:::: ##:
 ##:::::::. ######:: ##:::: ##:::: ##::::::: ##::::::: ##:::: ##: ########::
 ##::::::::..... ##: ##:::: ##:::: ##::::::: ##::::::: ##:::: ##: ##.... ##:
 ##::: ##:'##::: ##: ##:::: ##:::: ##::: ##: ##::::::: ##:::: ##: ##:::: ##:
. ######::. ######:: ########:::::. ######:: ########:. #######:: ########::
:......::::......:::........:::::::......:::........:::.......:::........:::



## V1.0 Pages & Contributors

<details>
<summary>Click to expand</summary>

### **Home Page**

- Laillah Zainath

### **Notes**

- Caden Epp – `.md` rendering and dynamic paths
- Ashley Abongwa – Styling
- Clay Geason – Styling

### **Login UI**

- Laillah Zainath

### **Header**

- Fiori Weldemichael – Basic structure & styling
- Draven Livingston – Mobile responsiveness

### **Footer**

- Lucas Borton

### **Alumni**

- Caden Epp

### **Contact**

- Laillah Zainath

### **Our Mission**

- Laillah Zainath


## Version 1.1

### Updates

- Revamped Header
- Revamped Footer
- Updated Notes Page Styles
- Redesigned Hero Section
- Added Dynamic Buttons
- Added Podcast Page

### Contributions

- **Hero Section** — Ashley Abongwa
- **Header** — Ashley Abongwa
- **Footer** — Caden Epp
- **Dynamic Buttons** — Ashley Abongwa
- **Notes Page Styles** — Ashley Abongwa
- **Podcast Page** — Caden Epp

</details>

## Version 2.0

Project was ported to SvelteKit and the following updates were made:

- Club meeting notes now have metadata to provide better cards
- All images were converted to WebP format for better performance
- Ground work for Blog page was laid out
- Podcast page was temporarily removed.
- Website logo and icon were updated to be `.svg` format for better performance.

## Future Updates

- Move Alumni Page data to JSON file for better maintainability
- Rebuild Podcast page with new student owned Podcast.
- Update Images, FAQ, social media links, and Alumni data to reflect current club members.

## Image conversion

All images in the project were converted to WebP format using the following command:

```bash
find . -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -exec sh -c 'for f; do ffmpeg -y -i "$f" -pix_fmt yuv420p -lossless 0 -q:v 80 "${f%.*}.webp" && rm "$f" && echo "🔥 Converted & deleted: $f"; done' _ {} +
```
