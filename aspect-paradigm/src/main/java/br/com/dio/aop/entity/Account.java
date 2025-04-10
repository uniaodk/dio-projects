package br.com.dio.aop.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import br.com.dio.aop.enums.TypeAccount;
import br.com.dio.aop.enums.TypeClient;

public abstract class Account {

  protected TypeAccount type;

  protected TypeClient typeClient;

  protected LocalDate dateOpened;

  protected BigDecimal balance;

  public Account(TypeClient typeClient, BigDecimal balance) {
    this.dateOpened = LocalDate.now();
    this.typeClient = typeClient;
    this.balance = balance;
  }

  public TypeAccount getType() {
    return this.type;
  }

  public TypeClient getTypeClient() {
    return this.typeClient;
  }

  public BigDecimal getBalance() {
    return this.balance;
  }

  public boolean isDateOpenedInTheFuture() {
    return dateOpened.isAfter(LocalDate.now());
  }

  public BigDecimal withdraw(BigDecimal amount) {
    this.balance = this.balance.subtract(amount);
    return this.balance;
  }

  public BigDecimal deposit(BigDecimal amount) {
    this.balance = this.balance.add(amount);
    return this.balance;
  }

  public BigDecimal calculateAmountFeeMaintance() {
    return BigDecimal.TEN;
  }
}
