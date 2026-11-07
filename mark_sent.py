import openpyxl, sys, datetime
row=int(sys.argv[1]); mode=sys.argv[2] if len(sys.argv)>2 else 'sent'
note=sys.argv[3] if len(sys.argv)>3 else ''
p='Appinara_Prospekti_a_Outreach.xlsx'
wb=openpyxl.load_workbook(p)
ws=wb['Prospekti']
t=datetime.date(2026,9,26).strftime('%d.%m.%Y')
if mode=='sent':
    ws.cell(row,11).value='Odoslané'
    ws.cell(row,12).value=t
    if not ws.cell(row,14).value: ws.cell(row,14).value=t
if note:
    old=ws.cell(row,13).value or ''
    ws.cell(row,13).value=(old+' | ' if old else '')+note
wb.save(p)
print('OK row',row,ws.cell(row,3).value,'|',ws.cell(row,11).value,'|L',ws.cell(row,12).value,'|N',ws.cell(row,14).value)
