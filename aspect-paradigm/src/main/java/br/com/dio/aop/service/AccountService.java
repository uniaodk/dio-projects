package br.com.dio.aop.service;

import java.math.BigDecimal;
import br.com.dio.aop.entity.Account;

public class AccountService {

  public BigDecimal withdraw(Account account, BigDecimal amount) {
    return account.withdraw(amount);
  }
}
