package webapplication.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "roles", uniqueConstraints = {
        @UniqueConstraint(name = "unique_role_name_constraint", columnNames = "roleName")
})
public class Role {
    public enum RoleName {
        ADMIN,
        USER
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true)
    @Enumerated(value = EnumType.STRING)
    private RoleName roleName;
}
