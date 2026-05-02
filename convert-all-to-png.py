#!/usr/bin/env python3
import os
from PIL import Image
import sys

upload_dir = '/Users/soumya/Documents/project/chebel/public/lovable-uploads'

# Get all files
files = sorted(os.listdir(upload_dir))

converted_count = 0
errors = []

print(f'Processing {len(files)} files...\n')

for idx, file in enumerate(files, 1):
    file_path = os.path.join(upload_dir, file)
    
    if not os.path.isfile(file_path):
        continue
    
    try:
        # Open image to check actual format
        img = Image.open(file_path)
        original_format = img.format
        original_size = os.path.getsize(file_path) / 1024  # KB
        
        # Always convert to PNG regardless of current format
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'LA', 'P'):
            bg = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            bg.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Save with PNG extension (replace any old extension)
        base_name = os.path.splitext(file)[0]
        new_path = os.path.join(upload_dir, base_name + '.png')
        
        # Save as PNG with optimization
        img.save(new_path, 'PNG', optimize=True, quality=95)
        
        new_size = os.path.getsize(new_path) / 1024  # KB
        size_change = ((new_size - original_size) / original_size * 100) if original_size > 0 else 0
        
        # Remove original if different name
        if new_path != file_path:
            os.remove(file_path)
        
        # Determine size change indicator
        if size_change < -10:
            status = f"📉 {size_change:6.1f}%"
        elif size_change > 10:
            status = f"📈 +{size_change:5.1f}%"
        else:
            status = f"➖ {size_change:6.1f}%"
        
        print(f'✓ {idx:3d}/{len(files)} - {base_name:40s} ({original_format:6s} {original_size:8.1f}KB) → {new_path.split("/")[-1]:20s} {new_size:8.1f}KB  {status}')
        converted_count += 1
    
    except Exception as e:
        error_msg = f'✗ {idx:3d}/{len(files)} - {file:50s} - Error: {str(e)}'
        print(error_msg)
        errors.append(error_msg)

print(f'\n✅ Successfully converted {converted_count}/{len(files)} images to PNG format!')

if errors:
    print(f'\n⚠️  {len(errors)} errors occurred:')
    for error in errors:
        print(error)
