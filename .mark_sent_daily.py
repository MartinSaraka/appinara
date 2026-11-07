import sys, openpyxl
from datetime import date
p='Appinara_Prospekti_a_Outreach.xlsx'
row=int(sys.argv[1]); email=sys.argv[2]
note=sys.argv[3] if len(sys.argv)>3 else None
today=date.today().strftime('%d.%m.%Y')
wb=openpyxl.load_workbook(p)
ws=wb['Prospekti']
cur=(ws.cell(row,5).value or '').strip()
assert cur.lower()==email.lower(), f"EMAIL MISMATCH row {row}: {cur!r} != {email!r}"
ws.cell(row,11).value='Odoslané'
ws.cell(row,12).value=today
if not (ws.cell(row,14).value):
    ws.cell(row,14).value=today
    n_set=True
else:
    n_set=False
if note:
    old=ws.cell(row,13).value or ''
    ws.cell(row,13).value=(old+' | '+note).strip(' |')
wb.save(p)
print(f"OK row={row} {email} K=Odoslané L={today} N={'set '+today if n_set else 'kept '+str(ws.cell(row,14).value)}")
