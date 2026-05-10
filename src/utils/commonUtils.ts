import type { ITechStack } from "@/config/ProjectsList";
import type { ISkill } from "@/constants/skillStack";

// Type to generate keys for the tech stack object
type TechKey<S extends readonly ISkill[]> =
    S[number]["name"] extends infer N
    ? N extends string
    ? RemoveSpacesAndDots<N>
    : never
    : never;

// Helper type to remove spaces and dots from a string
type RemoveSpacesAndDots<S extends string> =
    S extends `${infer A} ${infer B}`
    ? RemoveSpacesAndDots<`${A}${B}`>
    : S extends `${infer A}.${infer B}`
    ? RemoveSpacesAndDots<`${A}${B}`>
    : S;


/**
 * Builds a technology stack object from an array of skills.
 *
 * @param stack - An array of skills to build the tech stack from.
 * @returns An object representing the technology stack.
 */
export const buildTechStack = <const S extends readonly ISkill[]>(stack: S) => {
    return stack.reduce((acc, item) => {
        const key = item.name
            .replace(/\s+/g, "")
            .replace(/\./g, "") as TechKey<S>;

        (acc as Record<TechKey<S>, ITechStack>)[key] = {
            title: item.name,
            description: item.description,
            icon: item.icon,
        };

        return acc;
    }, {} as Record<TechKey<S>, ITechStack>);
};
