#include <stdio.h>

typedef enum
{
  SUM = 1,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION
} Operador;

int getOperation()
{
  const char *operations_name[] = {"", "Soma (+)", "Subtração (-)", "Multiplicação (*)", "Subtração (/)"};
  int total_operations = sizeof(operations_name) / sizeof(operations_name[0]) - 1;
  int operation;
  printf("Escolha a operação:\n");
  for (int i = 1; i <= total_operations; i++)
  {
    printf("%d - %s\n", i, operations_name[i]);
  }

  printf("Digite o número da operação: ");
  scanf("%d", &operation);

  if (operation < 1 || operation > total_operations)
  {
    printf("Operação inválida.\n");
    return -1;
  }
  return operation;
}

int main()
{
  double num1, num2, result;
  int operation;

  do
  {
    operation = getOperation();
  } while (operation == -1);

  printf("Digite o primeiro número: ");
  scanf("%lf", &num1);

  printf("Digite o segundo número: ");
  scanf("%lf", &num2);

  switch ((Operador)operation)
  {
  case SUM:
    result = num1 + num2;
    break;
  case SUBTRACTION:
    result = num1 - num2;
    break;
  case MULTIPLICATION:
    result = num1 * num2;
    break;
  case DIVISION:
    if (num2 == 0)
    {
      printf("Erro: divisão por zero.\n");
      return 1;
    }
    result = num1 / num2;
    break;
  }

  printf("Resultado: %.2lf\n", result);
  return 0;
};