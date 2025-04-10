package br.com.dio.aop.entity;

import java.math.BigDecimal;
import br.com.dio.aop.enums.TypeAccount;
import br.com.dio.aop.enums.TypeClient;

public class AccountInvestiment extends Account {

  public AccountInvestiment(TypeClient typeClient, BigDecimal balance) {
    super(typeClient, balance);
    this.type = TypeAccount.INVESTIMENT;
  }

  @Override
  public BigDecimal calculateAmountFeeMaintance() {
    return BigDecimal.valueOf(3);
  }
}
