#!/usr/bin/env python3
import os

# All used image files in the website
used_images = {
    # video-projects.ts images
    "image.png", "image1.png", "image2.png", "image3.png", "image4.png", "image5.png",
    "image6.png", "image7.png", "image8.png", "image9.png", "image10.png", "image11.png", 
    "image12.png", "image13.png",
    "logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png", 
    "logo6.png", "logo7.png", "logo8.png", "logo9.png", "logo10.png", "logo11.png",
    "birsa1.png", "birsa2.png", "birsa3.png", "birsa4.png", "birsa5.png", 
    "birsa6.png", "birsa7.png", "birsa8.png",
    "cmpdi1.png", "cmpdi2.png", "cmpdi3.png", "cmpdi4.png", "cmpdi5.png", 
    "cmpdi7.png", "cmpdi8.png", "cmpdi9.png", "cmpdi11.png", "cmpdi12.png", 
    "cmpdi13.png", "cmpdi14.png", "cmpdi15.png",
    "5g1.png", "5g2.png",
    "m112.png", "m113.png", "m114.png", "mii1.png",
    "nhai1.png", "nhai2.png", "nhai3.png", "nhai4.png",
    "3deer1.png", "3deer2.png", "3deer3.png",
    "rmc1.png", "rmc2.png", "rmc3.png", "rmc4.png", "rmc5.png", "rmc6.png", 
    "rmc7.png", "rmc8.png", "rmc9.png", "rmc10.png", "rmc11.png", "rmc12.png", 
    "rmc13.png", "rmc14.png", "rmc15.png", "rmc16.png", "rmc17.png", "rmc18.png", 
    "rmc20.png", "rmc21.png", "rmc22.png", "rmc23.png", "rmc24.png",
    # pages images
    "front1.png", "front2.png", "front3.png", "front4.png", "front6.png",
    "shivam1.png", "shivam2.png"
}

upload_dir = '/Users/soumya/Documents/project/chebel/public/lovable-uploads'

# Get all files
all_files = os.listdir(upload_dir)
png_files = [f for f in all_files if f.endswith('.png')]

deleted_count = 0
kept_count = 0

print(f'Total PNG files: {len(png_files)}')
print(f'Used images: {len(used_images)}')
print()

for file in sorted(png_files):
    file_path = os.path.join(upload_dir, file)
    
    if file not in used_images:
        try:
            os.remove(file_path)
            deleted_count += 1
            print(f'🗑️  Deleted: {file}')
        except Exception as e:
            print(f'✗ Error deleting {file}: {str(e)}')
    else:
        kept_count += 1

print()
print(f'✅ Cleanup complete!')
print(f'  Kept: {kept_count} images')
print(f'  Deleted: {deleted_count} unused images')
