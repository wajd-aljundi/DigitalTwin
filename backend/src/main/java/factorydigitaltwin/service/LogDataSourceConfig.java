package factorydigitaltwin.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

@Configuration
public class LogDataSourceConfig {

    @Value("${log.db.path:./data/factory_log}")
    private String logDbPath;

    @Bean
    public DataSource logDataSource() {
        // creates the datasource used exclusively by the LogService
        System.out.println(
                "LOG DATABASE PATH = " + logDbPath
        );

        System.out.println(
                "LOG DATABASE URL = jdbc:h2:file:"
                        + logDbPath
                        + ";AUTO_SERVER=TRUE"
        );
        return DataSourceBuilder.create()
                .url("jdbc:h2:file:" + logDbPath + ";AUTO_SERVER=TRUE")
                .driverClassName("org.h2.Driver")
                .username("sa")
                .password("")
                .build();
    }
    @Bean
    public JdbcTemplate logJdbcTemplate(DataSource logDataSource){
        // creates the JDBC template used to access the logging DB
        return new JdbcTemplate(logDataSource);
    }
}
