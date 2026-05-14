import os

base_path = r'c:\Users\mikel\Desktop\Sele Matematicas'
data_path = os.path.join(base_path, 'data.js')

with open(data_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

years = ['2021', '2022', '2023', '2024']
new_content = ""

for year in years:
    scratch_path = os.path.join(base_path, f'scratch_{year}.js')
    if os.path.exists(scratch_path):
        with open(scratch_path, 'r', encoding='utf-8') as sf:
            new_content += sf.read() + '\n\n'

placeholder = """// -----------------------------------------------------------------------------------------
// NOTA IMPORTANTE PARA EL USUARIO:
// Por favor, PEGA AQUÍ los bloques de código JavaScript que fuimos generando en el chat
// para las convocatorias de 2021, 2022, 2023 y 2024.
// -----------------------------------------------------------------------------------------"""

new_data_content = data_content.replace(placeholder, new_content)

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(new_data_content)

print("Successfully injected 2021-2024 data into data.js")
