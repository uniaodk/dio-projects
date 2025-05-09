// Defina os horários em milissegundos
const unsigned long tempoLigar = 5000;     // 5 segundos após iniciar (simula 18:00)
const unsigned long tempoDesligar = 10000; // 10 segundos após iniciar (simula 06:00)

const int ledPin = 13;

void setup()
{
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  unsigned long agora = millis();

  if (agora >= tempoLigar && agora < tempoDesligar)
  {
    digitalWrite(ledPin, HIGH);
  }
  else
  {
    digitalWrite(ledPin, LOW);
  }
}