package br.com.dio.aop.entity;

import java.math.BigDecimal;
import br.com.dio.aop.enums.TypeAccount;
import br.com.dio.aop.enums.TypeClient;

public class AccountSavings extends Account {

  public AccountSavings(TypeClient typeClient, BigDecimal balance) {
    super(typeClient, balance);
    this.type = TypeAccount.SAVINGS;
  }

  @Override
  public BigDecimal calculateAmountFeeMaintance() {
    return BigDecimal.ZERO;
  }
}
