#!/usr/bin/env python3
import os
import shutil

os.mkdir('material')
os.mkdir('material/outlined')
os.mkdir('material/twotone')
os.mkdir('material/sharp')
os.mkdir('material/regular')

shutil.copy('LICENSE', 'material')

for category in os.listdir('src'):
    for name in os.listdir(os.path.join('src', category)):
        for style in os.listdir(os.path.join('src', category, name)):
            if style == "materialicons":
                shutil.copy(os.path.join('src', category, name, style, '24px.svg'), 'material/regular/%s.svg' % name)
            else:
                shutil.copy(os.path.join('src', category, name, style, '24px.svg'), 'material/%s/%s.svg' % (style[13:], name))

