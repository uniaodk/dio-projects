package br.com.dio.aop;

import java.math.BigDecimal;
import br.com.dio.aop.entity.AccountInvestiment;
import br.com.dio.aop.enums.TypeClient;
import br.com.dio.aop.service.AccountService;

public class App {

    public static void main(String[] args) {
        AccountInvestiment accountInvestiment = new AccountInvestiment(TypeClient.NATURAL_PERSON, BigDecimal.valueOf(50));
        AccountService service = new AccountService();
        service.withdraw(accountInvestiment, BigDecimal.valueOf(110));
        System.out.println(accountInvestiment.getBalance());
    }
}
