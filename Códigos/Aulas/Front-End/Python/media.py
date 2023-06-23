#Entrada de dados.

nota1 = float (input("Digite a primeira nota do aluno: "))
nota2 = float (input("Digite a segunda nota do aluno: "))
nota3 = float (input("Digite a terceira nota do aluno: "))
nota4 = float (input("Digite a quarta nota do aluno: "))
divisão = 4


#Processamento dos dados.

media = ( nota1 + nota2 + nota3 + nota4 ) / divisão

#Saída.

print (media)

if media < 60:
    print ('Reprovado')
elif media < 70 :
    print ('Mediano')
elif media < 80:
    print ('Muito Bom')
else:
    print ('Excelente')
